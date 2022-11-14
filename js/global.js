 
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

    // Send the event data to the server
    Boxever.eventCreate(
        viewEvent, 
        response => console.log(response),
        "json"
    );
});

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
 


