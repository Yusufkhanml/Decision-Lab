from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from ..database import engine
import io
import csv

router = APIRouter(prefix="/export", tags=["Export"])

@router.get("/responses")
def export_responses_csv():
    conn = engine.raw_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT response_id, user_id, scenario_id, option_id,
               choice_type, choice_text, created_at
        FROM responses
        ORDER BY created_at
    """)

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow([desc[0] for desc in cursor.description])
    writer.writerows(cursor.fetchall())

    cursor.close()
    conn.close()

    output.seek(0)
    return StreamingResponse(
        output,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=responses.csv"}
    )
