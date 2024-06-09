from pydantic import BaseModel
from datetime import datetime

class GuestBookEntry(BaseModel):
    id: int
    name: str
    content: str
    timestamp: datetime
