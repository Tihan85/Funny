 // documnet.getElementById("addContactButton").addEventListener("click", function () {
        //     var phoneNumber = "+27822953753";
        //     var contactName = "Tihan Enslin";
        //     var contactLink = document.createElement("a");
        //     contactLink.href = "tel:" + phoneNumber;
        //     contactLink.textContent = "Add " + contactName + " to Contacts";
        //     var event = new MouseEvent("click", {
        //         view: window,
        //         bubbles: false,
        //         cancelable: true
        //     });
        //     contactLink.dispatchEvent(event);
        // })

        // document.getElementById("copyPhoneNumber").addEventListener("click", function () {
        //     var phoneNumber = document.getElementById("phoneNumber").textContent;

        //     // Create a temporary input field to copy text to the clipboard
        //     var tempInput = document.createElement("input");
        //     tempInput.type = "text";
        //     tempInput.value = phoneNumber;

        //     // Append the input field to the document
        //     document.body.appendChild(tempInput);

        //     // Select the text in the input field
        //     tempInput.select();
        //     tempInput.setSelectionRange(0, 99999); // For mobile devices

        //     // Copy the selected text to the clipboard
        //     document.execCommand("copy");

        //     // Remove the temporary input field
        //     document.body.removeChild(tempInput);

        //     alert("Phone number copied to clipboard: " + phoneNumber);
        // });


        document.getElementById("copyButton").addEventListener("click", function() {
            const numberToCopy = "+27822953753";
        
            const textArea = document.createElement("textarea");
            textArea.value = numberToCopy;
            document.body.appendChild(textArea);
        
            textArea.select();
        
            try {
                if (document.execCommand("copy")) {
                    alert("Now go paste my number into your contacts \u{1F609}: " + numberToCopy);
                } else {
                    alert("Copy to clipboard failed. Please copy the number manually.");
                }
            } catch (err) {
                console.error("Unable to copy to clipboard: " + err);
            } finally {
                document.body.removeChild(textArea);
            }
        });

// add a button with and id of "redirectButton" on main page

    document.getElementById("redirectButton").addEventListener("click", function () {
        setTimeout(function () {
            window.location.href = blank.html;
        }, 5000);
    });

// add this to a script in a blank page

        // window.history.pushState(null, null, documnet.URL);
        // window.addEventListener("popstate", function (){
        //     this.window.history.pushState(null, null, this.document.URL);
        // })