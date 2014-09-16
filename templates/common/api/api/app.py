from flask import Flask
from flask.ext import restful
from api.resources.task import TaskListAPI, TaskAPI

app = Flask(__name__)
api = restful.Api(app)

api.add_resource(TaskListAPI, '/api/tasks', endpoint='tasks')
api.add_resource(TaskAPI, '/api/tasks/<int:id>', endpoint='task')
