 
    // Define the Boxever queue 
    var _boxeverq = _boxeverq || [];


   //Defining the global page view event.
_boxeverq.push(() => { 
    const viewEvent = { 
        browser_id: Boxever.getID(),
        channel: "WEB",
        type: "VIEW",
        language: "EN",
        currency: "AUD",
        page: window.location.pathname,
        pos: "mnjKumar",
    };

    Boxever.addUTMParams(viewEvent); 

    // Send the event data to the server
    Boxever.eventCreate(
        viewEvent, 
        response => console.log(response),
        "json"
    );
});


//If identity is available then send identity event.
if(localStorage.getItem('userDetails')!== null){
    var user = JSON.parse(localStorage.getItem("userDetails"));
    _boxeverq.push(() => { 
        const identityEvent = { 
            browser_id: Boxever.getID(),
            channel: "WEB",
            type: "IDENTITY",
            language: "EN",
            currency: "AUD",
            page: window.location.pathname,
            email: user.email,
            firstname: user.firstName,
            lastname: user.lastName,
            gender: user.gender,
            //dob: user.dob,
            mobile: user.mobile,
            city: user.city,
            state: user.state,
            //country: user.country,            
            pos: "mnjKumar",
            identifiers: [{
                "provider": "WEB",
                "id": Math.floor(Math.random() * 10000) + 1
            }]
        };            
    
        // Send the event data to the server
        Boxever.eventCreate(
            identityEvent, 
            response => console.log(response),
            "json"
        );
    });

}


    // Define the Boxever settings 
    var _boxever_settings = {
        client_key: 'psfu6uh05hsr9c34rptlr06dn864cqrx', // Replace with your client key
        target: 'https://api.boxever.com/v1.2', // Replace with your API target endpoint specific to your data center region
        cookie_domain: 'github.io', // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
	web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net", // This is required for Sitecore Personalize for web experience and experiments
	pointOfSale: "mnjKumar" // This is the point of sale you have setup in Sitecore CDP & Personalize
};
 
    // Import the Boxever library asynchronously 
    (function() {
         var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;  
         s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.8.min.js';
         var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
 


    function createAccount(){

        console.log(">>>Registering Account");
        var user={
          firstName: document.getElementById('first-name').value,
          lastName:  document.getElementById('last-name').value,
          email:  document.getElementById('email-address').value,
          country:  document.getElementById("country").value,
          mobile: document.getElementById("mobile").value,
          city: document.getElementById("city").value,
          dob: ""+document.getElementById("birthyear").value+"-"+document.getElementById("birthmonth").value+"-"+document.getElementById("birthday").value+"T00:00",
          gender: document.getElementById("gender").value,
          state: document.getElementById('region').value,  
        };
        
        localStorage.setItem("userDetails", JSON.stringify(user));
        console.log(">>> Account details added to storage in 3 seconds "); 
        console.log(">> Redirecting to Account page")
        setTimeout(function(){
          document.location.href="account.html";
        },3000);
        
        }

        function addProductToCart(){
            var user = JSON.parse(localStorage.getItem("userDetails"));
    _boxeverq.push(() => { 
        const addEvent = { 
            browser_id: Boxever.getID(),
            channel: "WEB",
            type: "ADD",
            language: "EN",
            currency: "AUD",
            page: window.location.pathname,
            email: user.email,         
            //country: user.country,            
            pos: "mnjKumar",
            product: JSON.parse(localStorage.getItem("addedProduct"))
        
        };            
    
        // Send the event data to the server
        Boxever.eventCreate(
            identityEvent, 
            response => console.log(response),
            "json"
        );

        console.log(">> Event pushed to CDP")
    });
        }