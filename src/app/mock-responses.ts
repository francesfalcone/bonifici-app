export const PREPARE_RESPONSE = {
  "result": {
    "messages": [],
    "outcome": "SUCCESS",
    "requestId": "XGbsdgrZ5gsAAJ7vHrcAAAAb"
  },
  "data": {
    "oggi": "15/02/2019",
    "dataLimite": "15/02/2020"
  }
};
export const VERIFY_RESPONSE_OK = {
  "result": {
    "messages": [],
    "outcome": "SUCCESS",
    "requestId": "XGbsdgrZ5gsAAJ7vHrcAAAAb"
  },
  "data": {
    "totalAmount": {
      "amount": "12,0",
      "currency": "EUR"
    },
    "commissions": {
      "commissions": "0,000",
      "currency": "EUR"
    }
  },
  "transaction": {
    "id": "c5456ec0-96cb-4ab0-abf8-9e2ff9b54ed0"
  }
};
export const VERIFY_RESPONSE_ERROR = {
  "result": {
    "messages": [],
    "outcome": "ERROR",
    "requestId": "XGbsdgrZ5gsAAJ7vHrcAAAAb"
  }
};

export const EXECUTE_RESPONSE = {
  "result": {
    "messages": [
      {
        "message": "Hai effettuato un bonifico a Gino Rossi!",
      },
      {
        "message": "Una volta prodotta, troverai la contabile delle tue operazioni tra i documenti!",
      }
    ],
    "outcome": "SUCCESS",
    "requestId": "XGbwGQrZ5gsAAJ7vLAcAAAAZ"
  },
  "data": {
    "cro": "1902151800119068480160403200IT79993"
  }
};