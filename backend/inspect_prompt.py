from app.services.ai_service import PROMPT

print(PROMPT.count('{'))
print(PROMPT.count('}'))
print('\n----- FORMATTED PROMPT PREVIEW -----\n')
print(PROMPT.format(text='SAMPLE_TEXT')[:800])
