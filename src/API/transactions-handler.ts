import axios from "axios"


export const orderTransactios = async () => {

    let data = JSON.stringify({
        "payment_type": "qris",
        "transaction_details": {
          "order_id": "order03",
          "gross_amount": 66000
        },
        "item_details": [
          {
            "id": "id1",
            "price": 66000,
            "quantity": 1,
            "name": "Bakso KNTl"
          }
        ],
        "customer_details": {
          "first_name": "angel",
          "last_name": "caca",
          "email": "angel.caca@midtrans.com",
          "phone": "081223323423"
        },
        "qris": {
          "acquirer": "gopay"
        }
      });

    let config: object = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Basic U0ItTWlkLXNlcnZlci1UZWNUQ1k1MGh1MmNtWEZtS2s3anI3YjU6U0ItTWlkLXNlcnZlci1UZWNUQ1k1MGh1MmNtWEZtS2s3anI3YjU='
        },
        data : data
    }

    const result = axios(config)
                        .then((res) => {
                            console.log(JSON.stringify(res.data));
                        }).catch((err) => {
                            console.log(err.response)
                        })

    return Promise.resolve(result);
}