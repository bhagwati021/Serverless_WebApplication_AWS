import json
import boto3  #the SDK for interacting with AWS

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('serverless_app')
def lambda_handler(event, context):
    response = table.get_item(Key={
        'id':'1'
    })
    views = response['Item']['views']
    views = views + 1
    
    print(views)
    
    response = table.put_item(Item={
        'id':'0',
        'views': views
    })
    
    return views