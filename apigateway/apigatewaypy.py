import json

def lambda_handler(event, context):
    params = event.get("queryStringParameters") or {}
    foo = params.get("foo")

    return {
        "statusCode": 200,
        "body": json.dumps({
            "foo": foo
        })
    }