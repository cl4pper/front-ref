def validate_Int(value):
  try:
    int(value)
    return value
  except:
    print(f'{value} is not a int!')
