@lesson_id
api1
@lesson_title
API Introduction
@topic
api
@video_url
https://youtu.be/OdYflAHc-1o

@question 
What happens when a user searches “www.facebook.com”? Explain how the request gets resolved and how the user arrives at facebook web app.

@hint 
IP addresses are unique address identifiers for every machine. In order to communicate with one another, ip addresses are registered on a web of different pockets of network which communicates with one another.

@hint
DNS (domain name service) is a registrar of different ip addresses that translates an ip address to a domain name such as www.google.com. How might knowing the domain name help with the request/response in a client to host communication?

@answer
DNS acts like a phone book for ip addresses of different machines. It translates the ip address to a human readable domain name. A client making a request, to do anything, must need either the domain name of the host or the ip address. Once the user searches the domain name www.facebook.com, the domain name is queried by the DNS and a specific ip address is returned. From there the request gets sent to the ip address and Facebook responds with html/css/javascript for the user’s browser to render the app.

@question 
How do domain names gets resolved by the DNS, ie how does a DNS query work?

@answer
First, the user’s computer searches its own web cache for existing mapping of domain to ip. If this does not exist, the query goes to the user’s ISP (internet service provider) or the dns resolver. If the resolver solver still cannot find the mapping, it passes the request further along up the dns hierarchy, known as the dns root server. The dns root server will tell the ISP the ip address of the top level domain name server (TLD) to query against. The TLD is in charge of mapping all the ip addresses of the authoritative nameserver for the given top level domain name (.org, .com, .io, etc). Once the ISP has the authoritative nameserver’s ip, the ISP queries the authoritative nameserver for the domain name’s ip address. Now the ISP cache’s the domain name so the next time another user queries it, the ISP will hold the mapping.

@question 
Once the ip address is returned from the DNS, what happens afterwards? How does knowing the ip address help the user reach Facebook’s website?

@answer
First, the user’s computer searches its own web cache for existing mapping of domain to ip. If this does not exist, the query goes to the user’s ISP (internet service provider) or the dns resolver. If the resolver solver still cannot find the mapping, it passes the request further along up the dns hierarchy, known as the dns root server. The dns root server will tell the ISP the ip address of the top level domain name server (TLD) to query against. The TLD is in charge of mapping all the ip addresses of the authoritative nameserver for the given top level domain name (.org, .com, .io, etc). Once the ISP has the authoritative nameserver’s ip, the ISP queries the authoritative nameserver for the domain name’s ip address. Now the ISP cache’s the domain name so the next time another user queries it, the ISP will hold the mapping.
