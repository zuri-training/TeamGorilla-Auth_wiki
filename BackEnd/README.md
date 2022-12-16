## AuthWiki
## List of APIs and their responds type

Check out the live demo here [Demo App](https://auth-wiki-leroicodes.vercel.app/).


Endpoint for Login [POST END POINT: @url](@url).

Request Type {

        method: POST
        
        headers: {
            Content-Type: "application/json"
        }

        body: {
            email:  @required
            password: @required
        }

}


Responds type { 

    errors: []--- contains list of errors of a given request

    success: boolean --- show the success state of a request could be true or false,

    token: will contain a token when the user is authenticated or null if not

    message: string --  a string containing a message to see for the frontend users

 }


 Endpoint for Registration [POST END POINT: @url](@url).

Request Type {

        method: POST
        
        headers: {
            Content-Type: "application/json"
        }

        body: {
            email:  @required
            password: @required
            fullname: @required
        }

}


Responds type { 

    errors: []--- contains list of errors of a given request

    success: boolean --- show the success state of a request could be true or false,

    message: string --  a string containing a message to see for the frontend users

 }
