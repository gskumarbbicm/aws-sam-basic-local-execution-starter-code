exports.lambdaHandler = async (event, context) => {
    const foo = event.queryStringParameters?.foo;
    return {
        statusCode: 200,
        body: JSON.stringify({
            foo: foo ?? null
        })
    };
};

//sam local invoke -e ./apigateway/apigateway_event.json ApiGatewayFunction
//sam local start-api
