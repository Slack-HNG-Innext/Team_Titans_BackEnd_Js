define({ "api": [
  {
    "type": "POST",
    "url": "/api/v1/send",
    "title": "multiple",
    "name": "sendMultiple",
    "group": "SEND_SMS",
    "description": "<p>Sends SMS to multiple phone number(comma delimited list) specied in the request body</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Expects 'message' key in the request body.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_nums",
            "description": "<p>Expects mobile_nums(comma delimited list) key in the request body.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Your Messages has been succesfully sent and saved</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message_id",
            "description": "<p>message ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Your Messages has been succesfully sent and saved\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorOccured",
            "description": "<p>An error occured while processing your request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PRECONDITION_FAILED:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"message field is empty\"\n}\nHTTP/1.1 404 Not Found\n{\n  \"error\": \"mobile_num field is empty\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 No Response\n{\n  \"error\": \"error in sending message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "bin/example.js",
    "groupTitle": "SEND_SMS"
  },
  {
    "type": "POST",
    "url": "/api/v1/send",
    "title": "single",
    "name": "sendSms",
    "group": "SEND_SMS",
    "description": "<p>Sends SMS to the phone number specied in the request body</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Expects 'message' key in the request body.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_num",
            "description": "<p>Expects 'mobile_num' key in the request body.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message",
            "description": "<p>Your Message has been succesfully sent and saved</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message_id",
            "description": "<p>message ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Your Message has been succesfully sent and saved\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorOccured",
            "description": "<p>An error occured while processing your request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PRECONDITION_FAILED:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"message field is empty\"\n}\nHTTP/1.1 404 Not Found\n{\n  \"error\": \"mobile_num field is empty\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 No Response\n{\n  \"error\": \"error in sending message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "bin/example.js",
    "groupTitle": "SEND_SMS"
  },
  {
    "type": "get",
    "url": "/api/v1/balance",
    "title": "",
    "name": "getAccountBalance",
    "group": "SMS_Account_Balance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "null",
            "optional": false,
            "field": "none",
            "description": "<p>endpoint call does not require any param.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>Your current account balance is (balance) in (currency)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Your current account balance is 748 in dollars\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ErrorOccured",
            "description": "<p>An error occured while processing your request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"An error occured while processing your reques\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "bin/example.js",
    "groupTitle": "SMS_Account_Balance"
  },
  {
    "type": "get",
    "url": "api/v1/all",
    "title": "Outbox",
    "name": "getAllSms",
    "group": "SMS_Records",
    "description": "<p>Retrieves all outbound messages saved locally</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "null",
            "optional": false,
            "field": "none",
            "description": "<p>endpoint call does not require any param.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>message ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Message content.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>recipeint.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateSent",
            "description": "<p>CreatedAt.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"56edesd54643434ece\",\n  \"to\": \"+2348\",\n  \"body\": \"Message Content\",\n  \"dateSent\": \"+2020/6/11\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "bin/example.js",
    "groupTitle": "SMS_Records"
  },
  {
    "type": "get",
    "url": "api/v1/sms_history",
    "title": "Sent",
    "name": "smsHistory",
    "group": "SMS_Records",
    "description": "<p>Retrieves all sent messages with delivery status</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "null",
            "optional": false,
            "field": "none",
            "description": "<p>endpoint call does not require any param.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>message ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Message content.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to",
            "description": "<p>reciepient.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateSent",
            "description": "<p>CreatedAt.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dateUpdated",
            "description": "<p>DeliveredOn.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Delivery Status.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"56edesd54643434ece\",\n  \"to\": \"+2348\",\n  \"body\": \"Message Content\",\n  \"dateSent\": \"+2020/6/11\"\n  \"dateUpdated\": \"+2020/6/11\"\n  \"status\": \"Delivered\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "bin/example.js",
    "groupTitle": "SMS_Records"
  }
] });
