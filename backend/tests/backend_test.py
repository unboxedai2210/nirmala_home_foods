"""Backend tests for Nirmala Home Foods API."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://gongura-kitchen-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Root ----------
class TestRoot:
    def test_root_200(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "Nirmala" in data["message"]


# ---------- Orders ----------
class TestOrders:
    def test_create_order_success(self, api_client):
        payload = {
            "name": "TEST_Lakshmi",
            "phone": "+919999999999",
            "items": "500g Mutton Gongura, 1kg Bundi Laddu",
            "notes": "Less spicy",
        }
        r = api_client.post(f"{API}/orders", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert "_id" not in data
        assert data["name"] == payload["name"]
        assert data["phone"] == payload["phone"]
        assert data["items"] == payload["items"]
        assert data["notes"] == payload["notes"]
        assert "created_at" in data

    @pytest.mark.parametrize(
        "payload",
        [
            {"name": "", "phone": "+911", "items": "x"},
            {"name": "a", "phone": "", "items": "x"},
            {"name": "a", "phone": "+911", "items": ""},
            {"name": "   ", "phone": "+911", "items": "x"},
        ],
    )
    def test_create_order_missing_fields_400(self, api_client, payload):
        r = api_client.post(f"{API}/orders", json=payload)
        assert r.status_code == 400, r.text

    def test_list_orders_no_id_and_reverse_chrono(self, api_client):
        # Create 2 orders then ensure both present, newest first, no _id
        p1 = {"name": "TEST_AA_first", "phone": "1", "items": "x"}
        p2 = {"name": "TEST_AA_second", "phone": "2", "items": "y"}
        r1 = api_client.post(f"{API}/orders", json=p1)
        assert r1.status_code == 200
        r2 = api_client.post(f"{API}/orders", json=p2)
        assert r2.status_code == 200

        r = api_client.get(f"{API}/orders")
        assert r.status_code == 200
        arr = r.json()
        assert isinstance(arr, list)
        for o in arr:
            assert "_id" not in o
            assert "id" in o
            assert "name" in o
        # Newest first: find indexes of our two created
        names = [o.get("name") for o in arr]
        assert "TEST_AA_second" in names
        assert "TEST_AA_first" in names
        assert names.index("TEST_AA_second") < names.index("TEST_AA_first")

    def test_created_order_appears_in_list(self, api_client):
        unique_name = f"TEST_Verify_{os.urandom(4).hex()}"
        payload = {"name": unique_name, "phone": "+91", "items": "1kg Bobbatlu"}
        c = api_client.post(f"{API}/orders", json=payload)
        assert c.status_code == 200
        created_id = c.json()["id"]

        r = api_client.get(f"{API}/orders")
        assert r.status_code == 200
        ids = [o.get("id") for o in r.json()]
        assert created_id in ids
