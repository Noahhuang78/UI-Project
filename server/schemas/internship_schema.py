from pydantic import BaseModel
from typing import List

class InternshipSchema(BaseModel):
    id: str
    category: str
    title: str
    organisation: str
    shortDescription: str
    description: str
    requirements: List[str]
    salary: str
    date: str
    time: str
    location: str
    spots: int
    imgSrc: str
    tags: List[str]
