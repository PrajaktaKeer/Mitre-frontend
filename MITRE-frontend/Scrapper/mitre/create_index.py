import requests
import json
from elasticsearch import Elasticsearch
es = Elasticsearch()

#deleting existing index
#requests.delete('http://localhost:9200/mitre')
es.indices.delete(index='matrix', ignore=[400, 404])
es.indices.delete(index='datasources', ignore=400)

# mapping = {  
# 	"mappings":{  
# 		"dynamic": "false",
# 		"dynamic_templates": [
# 			{
# 				"datacomponents_nested": {
# 					"path_match": "datacomponents.*",
# 					"mapping": {
# 						"type" : "nested",
# 						"properties": {
# 							"description": {
# 							"type": "text"
# 							},
# 							"associatedIds": {
# 							"type": "text"
# 							}
# 						}
# 					}
# 				}
# 			}
# 		],
# 		"properties": {
# 			"name": {"type": "text"},
# 			"description": {"type": "text"},
# 			"id": {"type": "text"},
# 			"platforms": {"type": "text"},
# 			"collectionlayers": {"type": "text"},
# 			"contributors": {"type": "text"},
# 			"version":  {"type": "text"},
# 			"created": {"type": "text"},
# 			"lastmodified": {"type": "text"},
# 			"datacomponents": {
# 			  "type": "nested",
# 			  "dynamic": "true"
# 			}
# 		}
# 	}
# }  

es.indices.create(index='matrix')
es.indices.create(index='datasources')

url = 'http://localhost:9200/matrix/_settings'
body = {"index.mapping.total_fields.limit": 10000000,
        "index.mapping.nested_fields.limit" : 1000000,
        "index.mapping.nested_objects.limit" : 1000000}
headers = {'content-type': 'application/json'}

r = requests.put(url, data=json.dumps(body), headers=headers)
print(r)

url = 'http://localhost:9200/datasources/_settings'
body = {"index.mapping.total_fields.limit": 10000000,
        "index.mapping.nested_fields.limit" : 1000000,
        "index.mapping.nested_objects.limit" : 1000000}
headers = {'content-type': 'application/json'}

r = requests.put(url, data=json.dumps(body), headers=headers)
print(r)


# curl -X GET "localhost:9200/datasources/_search?pretty" -H 'Content-Type: application/json' -d'
# {
#   "query": {
#     "query_string" : {
#       "fields" : ["datacomponents.*.associatedIds"],
#       "query" : "T1020",
#        "minimum_should_match": 2
#     }
#   },
#   "_source": {
#     "includes": [ "datacomponents.*"],
#     "excludes": [ "*.description", "*.associatedIds" ]
#   }
# }
# '