{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "sdk-qa-framework.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "sdk-qa-framework.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "sdk-qa-framework.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "sdk-qa-framework.labels" -}}
helm.sh/chart: {{ include "sdk-qa-framework.chart" . }}
{{ include "sdk-qa-framework.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/* Selector labels */}}
{{- define "sdk-qa-framework.selectorLabels" -}}
{{- range $key, $value := .Values.selectorLabels -}}
{{ $key }}: {{ $value | quote }}
{{ end }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "sdk-qa-framework.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "sdk-qa-framework.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/* ENV vars */}}
{{- define "sdk-qa-framework.envVars" -}}
{{- range $k, $v := .Values.envVars }}
- name: {{ index $v "name" }}
  value: {{ tpl ( index $v "value" ) $ | quote }}
{{- end }}
{{- end }}