# Email Abstraction Failover - Code Challenge

## Challenge Description

Create a service that accepts the necessary information and sends emails.
The application should provide an abstraction between 2 different email service providers. If one of
the services goes down, your service can quickly failover to a different provider without affecting your
customers.

Example of Email Providers:
- Mailgun (https://documentation.mailgun.com/en/latest/api-intro.html#base-url-1)
- SendGrid (https://docs.sendgrid.com/for-developers/sending-email/api-getting-started)

Above services are free to try. You may choose alternative email providers that have API integration.
Your solution should cater for multiple email recipients, CCs and BCCs but there is no need to support
HTML email body types (plain text is OK).

The solution _**should be implemented**_ as one or more **RESTful API** calls (see technology constraints
below):
- No authentication is required for the scope of this exercise
- No 3rd party client library should be used to integrate with Mailgun, Sendgrid or other providers. 
- If you are running out of time, you may just implement the integration to one of the provider you choose, and you may hardcode the response from the other provider (the idea, we wanted to see how would you deal with 2 different providers where each has different HTTP request/response paylooad types).

A simple HTTP client of choice can be used to handcraft HTTP requests to the email gateway services.

## SCOPE
Non-crucial features can be left unimplemented and listed in the `TODO` section of the readme file. Be
ready to discuss the production readiness of you solution in your job interview (what's missing / why
etc)
We respect your time and don't want you spending more than a few hours on this challenge.

## TECHNOLOGY CONSTRAINTS
Technologies should be as agreed upon with the recruiter.

## REVIEW CRITERIA
- **Input Validation**: how resilient the application is to wrong/misspelt input? What’s the feedback to the
user? 
- **Error Handling**: what feedback the user is given in case of errors? How resilient is the application to
IO errors, unresponsive or slow backends?
- **Technical choices**: do choices of libraries, databases, architecture etc. seem appropriate for the
chosen application?
- **Clarity**: does the README clearly and concisely explains the problem and solution? Are technical
trade offs explained? Are install/setup instructions provided?
- **Correctness**: does the application do what was asked? If there is anything missing, does the
README explain why it is missing?
- **Code quality**: is the code simple, easy to understand, and maintainable? Are there any code smells
or other red flags? Does object-oriented code follows principles such as the single responsibility
principle? Is the coding style consistent with the language's guidelines? Is it consistent throughout the
codebase?
- **Testing**: Your code must be testable. If you run out of time and cannot add the necessary testing be
prepared to answer questions so that we get a feel for your testing skills.

## Submission Requirements
- Please upload your solution and provide a link to your git repository
- include a README.md file with info on how to build, test and deploy.
- Nice to have: Please deploy your solution somewhere (URL) to play with it.
