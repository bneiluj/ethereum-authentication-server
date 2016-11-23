/** 
* The MIT License (MIT) 
*  
* Copyright (c) 2016 Auth0, Inc. <support@auth0.com> (http://auth0.com) 
*  
* Permission is hereby granted, free of charge, to any person obtaining a copy 
* of this software and associated documentation files (the "Software"), to deal 
* in the Software without restriction, including without limitation the rights 
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
* copies of the Software, and to permit persons to whom the Software is 
* furnished to do so, subject to the following conditions: 
*  
* The above copyright notice and this permission notice shall be included in all 
* copies or substantial portions of the Software. 
*  
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
* SOFTWARE. 
*/
'use strict';

module.exports = function(website, email, primaryAddress, requestId, details) {
	
	const title = "User registration request",
	body = "Accept if you wish to accept user registration",
	type = 2,
	city = details.city,
	ip = details.ip,
	timestamp = Date.now(),
	osAndWebBrowser = details.osAndWebBrowser;
	
	var registrationToken,
	secondaryAddress,
	challenge;
	
	return {
		toPushNotification : function toPushNotification() {
		    var requestInfo = {
                requestId : requestId,
                challenge : challenge,
                type : type,
                email : email,
                primaryAddress : primaryAddress,
                secondaryAddress : secondaryAddress,
                city :city,
                ip : ip,
                website : website,
                timestamp : timestamp,
                osAndWebBrowser :  osAndWebBrowser
            }
			return {
				to : registrationToken,
				notification : {
					title : title,
					body : body
				},
				data : {
				    requestInfo : JSON.stringify(requestInfo)
				}
			};
		},
		getWebsite : function getWebsite() {
            return website;
        },
		getEmail : function getEmail() {
            return email;
        },
		setSecondaryAddress : function setSecondaryAddress(_secondaryAddress) {
			secondaryAddress = _secondaryAddress;
		},
		getSecondaryAddress : function getSecondaryAddress() {
			return secondaryAddress;
		},
		getPrimaryAddress : function getPrimaryAddress() {
            return primaryAddress;
        },
		setRegistrationToken : function setRegistrationToken(_registrationToken) {
			registrationToken = _registrationToken;
		},
		getRegistrationToken : function getRegistrationToken() {
			return registrationToken;
		},
		getRequestId : function getRequestId() {
			return requestId;
		},
		setChallenge : function setChallenge(_challenge) {
			challenge = _challenge;
		}
	};
}