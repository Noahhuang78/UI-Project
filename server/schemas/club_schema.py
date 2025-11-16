from pydantic import BaseModel
from typing import List

class ClubSchema(BaseModel):
    id: str
    category: str
    title: str
    organisation: str
    description: str
    date: str
    time: str
    location: str
    spots: int
    imgSrc: str
    tags: List[str]
