# TG-Pre-Work

## When we hit https://www.techtonicgroup.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions.

`let howWebFunctions = When I hit the https://www.techtonicgroup.com/ URL, my browser first makes a DNS query to find out the IP address of the server that's serving the site. Once my browser has the IP address, it initiates a TCP connection with the server and verifies the authenticity of the TLS certificate, which in this case, is invalid. The common name on the certificate doesn't match www.techtonicgroup.com and the certificate check occurs before the redirect to the new (presumably new) techtonic.com domain. After I accept the certificate warning, I'm redirected to https://www.techtonic.com (which results in another DNS query and another TCP connection.) The server then sends back the files that make up www.techtonic.com (i.e. HTML, CSS, and JS files). Once my browser recieves these files, it can interpret and render them in the browser to display the webpage.`


## From start to finish how does that data reach you to be rendered in the browser?

`window.alert(howWebFunctions)`


## What code is rendered in the browser?

The client-side code, like HTML, CSS, JS, or other code files, is interpreted and displayed by the browser.

## What is the server-side code’s main function?

The server-side code's main function is to handle requests from the client. If the client makes a GET request, the server sends back the code and media requested by the client. If the client makes a POST request, the server is in charge of handling the data sent by the client (i.e. login information). Another important function of server-side code is to interact with databases (i.e. logging a user into a site) and files (i.e. application logging).

## What is the client-side code’s main function?

The client-side code's main function is interpret the information sent from the server and display it to the user. 

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

The answer depends on the configuration of the server and client. If the server implements server-side caching, it may store multiple copies of assets in its cache to serve them faster. Similarly, the client may cache data from the server in order to reduce load times. Generally speaking, however, there is one instance of the client-side assets per server. 

## How many instances of the server-side code are available at any given time?

If this question is asking how many physical copies the server-side code are available, then there is one copy per server that is handling traffic for that website. 

If this question ia asking how many connections to the server-side code are available at a given time, then that would depend on the actual architecture. For example, if you have one server configured to take a maxium of 200 requests, then it can only handle 200 concurrent connections. 

## What is runtime?

"Runtime describes software/instructions that are executed while your program is running, especially those instructions that you did not write explicitly, but are necessary for the proper execution of your code." [Stack Overflow](https://stackoverflow.com/questions/3900549/what-is-runtime)

A good example of runtime is an Apache web server serving HTML and CSS that I wrote. I didn't write the Apache program, but it is necessary to have a web server to handle incoming client connections. Without Apache (or any other web server), clients wouldn't be able to access my code. That makes Apache part of my runtime.

## How many instances of the the databases connected to the server application are created?

If this question is asking how many databases the server creates, then the answer is probably none. The application likely isn't creating database servers.

If this question is asking how many connections/instances the server application is making to the database(s), then generally speaking, the application creates one database connection per database query. This would also include the application periodically checking in with the database to verify the application's ability to connect to the database, if that functionality were present in the application.




