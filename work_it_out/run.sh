#!/bin/bash

cd $(dirname $0)
source ../.venv/bin/activate
gunicorn -b unix:/tmp/django.sock work_it_out.wsgi:application
