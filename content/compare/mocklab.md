---
title: Comparison between Mockoon and MockLab API mocking
excerpt: Discover the differences between MockLab online API mocking and Mockoon's desktop application and CLI mocking features
meta:
  title: Comparison between Mockoon and MockLab API mocking
  description: Discover the differences between MockLab online API mocking and Mockoon's desktop application and CLI mocking features
image: comparison-mockoon-mocklab.png
imageAlt: Mockoon and MockLab logos side by side
imageWidth: 1200
imageHeight: 400
order: 4
---

MockLab is an API mocking cloud services. It uses [WireMock](/compare/wiremock/) as its underlying engine and inherits most of its capabilities, while adding more possibilities like support for the OpenAPI specification. It enables developers to create mock REST APIs endpoints, intercept and proxy requests. The fake REST endpoints can adopt realistic behavior thanks to a request matching system and a templating language similar to Mockoon's one.

While Mockoon provides a similar mocking experience, it has a different approach as it offers an offline, privacy-friendly desktop application. Coupled with the CLI that allows you to deploy your REST mocks anywhere, it gives the power needed to automate your development and testing.
Mockoon is easy to use and has no learning curve. You can easily start using it and [create your first mock API in under a minute](/tutorials/getting-started/).
From a powerful templating system to generate dynamic and realistic mock data to a proxy mode to partially mock API endpoints, Mockoon takes API mocking to the next level. It also offers many customization options: status codes, dynamic headers, rules system, etc.

> What is API mocking for? Discover the different [use cases](/use-cases/) or read our [API mocking guide](/articles/what-is-api-mocking/).

![#sub#MockLab (left) and Mockoon (right) UIs side by side{1600x467}](/images/compare/comparison-mockoon-mocklab-screenshot.png)

## Features comparison

| Features                                                       | MockLab                                                                                               | Mockoon                                                                                                                                                                                                          |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <span class="text-muted">Offline/Cloud based</span>            | **Cloud**<br/>Uses [WireMock](/compare/wiremock/) as its underlying engine                            | **Offline** (desktop application)<br/>Deploy anywhere with the [CLI](/cli/) and [Docker image](https://hub.docker.com/r/mockoon/cli)                                                                             |
| <span class="text-muted">Free/paid service</span>              | **Paid**<br/>Up to 1000 requests/month                                                                | **Free**                                                                                                                                                                                                         |
| <span class="text-muted">Open-source</span>                    | <span class="text-danger fw-bold fs-3">✖</span>                                                       | <span class="text-success fw-bold fs-3">✔</span>                                                                                                                                                                 |
| <span class="text-muted">CLI</span>                            | <span class="text-danger fw-bold fs-3">✖</span>                                                       | <span class="text-success fw-bold fs-3">✔</span> <br/>A [CLI](/cli/) and a [Docker image](https://hub.docker.com/r/mockoon/cli) are available                                                                    |
| <span class="text-muted">Proxy mode</span>                     | <span class="text-success fw-bold fs-3">✔</span><br/>Can intercept and forward the traffic            | <span class="text-success fw-bold fs-3">✔</span><br/>[Documentation](/tutorials/partial-mocking-proxy/)                                                                                                          |
| <span class="text-muted">OpenAPI support </span>               | <span class="text-success fw-bold fs-3">✔</span>                                                      | <span class="text-success fw-bold fs-3">✔</span><br/>[Documentation](/docs/latest/openapi/import-export-openapi-format/)                                                                                         |
| <span class="text-muted">Recording</span>                      | <span class="text-success fw-bold fs-3">✔</span><br/>Can record entering requests to create stubs     | <span class="text-success fw-bold fs-3">✔</span><br/>Mockoon can [create mock endpoints based on entering requests](/tutorials/requests-recording-auto-mocking/)                                                 |
| <span class="text-muted">Response rules</span>                 | <span class="text-success fw-bold fs-3">✔</span><br/>Request matching system similar to Mockoon's one | <span class="text-success fw-bold fs-3">✔</span><br/>Advanced system of [rules](/docs/latest/route-responses/dynamic-rules/)                                                                                     |
| <span class="text-muted">Dynamic/realistic data</span>         | <span class="text-success fw-bold fs-3">✔</span><br/>Templating system similar to Mockoon's one       | <span class="text-success fw-bold fs-3">✔</span><br/>[Advanced templating system](/tutorials/generate-mock-json-data/) to generate realistic fake data                                                           |
| <span class="text-muted">File serving</span>                   | <span class="text-success fw-bold fs-3">✔</span>Basic static file serving from dedicated directory    | <span class="text-success fw-bold fs-3">✔</span><br/>[Documentation](/docs/latest/file-serving/)                                                                                                                 |
| <span class="text-muted">Custom headers</span>                 | <span class="text-success fw-bold fs-3">✔</span><br/>At endpoint's level                              | <span class="text-success fw-bold fs-3">✔</span><br/>At endpoint's and server's levels<br/>Supports [templating helpers](/docs/latest/templating/overview/#headers-templating) for dynamically generated headers |
| <span class="text-muted">Customizable status code</span>       | <span class="text-success fw-bold fs-3">✔</span>                                                      | <span class="text-success fw-bold fs-3">✔</span>                                                                                                                                                                 |
| <span class="text-muted">Route regex</span>                    | <span class="text-success fw-bold fs-3">✔</span>                                                      | <span class="text-success fw-bold fs-3">✔</span><br/>[Documentation](/docs/latest/routing/)                                                                                                                      |
| <span class="text-muted">GraphQL support</span>                | <span class="text-danger fw-bold fs-3">✖</span>                                                       | <span class="text-danger fw-bold fs-3">✖</span>                                                                                                                                                                  |
| <span class="text-muted">CORS and pre-flight handling</span>   | <span class="text-danger fw-bold fs-3">✖</span><br/>Manual setup                                      | <span class="text-success fw-bold fs-3">✔</span><br/>Automatically answers 200 to OPTIONS pre-flight requests<br/>Headers can be customized                                                                      |
| <span class="text-muted">Slow network/server simulation</span> | <span class="text-success fw-bold fs-3">✔</span><br/>At endpoint's level                              | <span class="text-success fw-bold fs-3">✔</span><br/>At server's and endpoint's levels                                                                                                                           |