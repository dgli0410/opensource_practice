from fastapi import APIRouter, HTTPException, Path
from model import GuestBookEntry
from datetime import datetime

guest_book_router = APIRouter()

guest_book_entries = []
entry_counter = 0

@guest_book_router.post("/entry")
async def add_entry(entry: GuestBookEntry) -> dict:
    global entry_counter
    entry.id = entry_counter = entry_counter + 1
    entry.timestamp = datetime.now()
    guest_book_entries.append(entry)
    return {"msg": "Entry added successfully"}

@guest_book_router.get("/entry")
async def retrieve_entries() -> dict:
    return {"entries": guest_book_entries}

@guest_book_router.get("/entry/{entry_id}")
async def get_single_entry(entry_id: int = Path(..., title="ID")) -> dict:
    for entry in guest_book_entries:
        if entry.id == entry_id:
            return {"entry": entry}
    return {"msg": "Entry with supplied ID doesn't exist"}

@guest_book_router.delete("/entry/{entry_id}")
async def delete_entry(entry_id: int = Path(..., title="the ID of the entry to delete")) -> dict:
    for index, entry in enumerate(guest_book_entries):
        if entry.id == entry_id:
            del guest_book_entries[index]
            return {"msg": f"Entry with ID {entry_id} deleted successfully"}
    return {"msg": "Entry with supplied ID doesn't exist"}
