def validate_int(value) -> int:
  try:
    return int(value)
  except:
    raise Exception(f'{value} is not a int')
