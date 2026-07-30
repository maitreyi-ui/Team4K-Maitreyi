from .upload import router as upload_router
from .investigation import router as investigation_router
from .timeline import router as timeline_router
from .graph import router as graph_router
from .report import router as report_router

__all__ = [
    "upload_router",
    "investigation_router",
    "timeline_router",
    "graph_router",
    "report_router",
]
