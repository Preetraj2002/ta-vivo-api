import axios from 'axios';

class WhatsappService {


  /**
   * It creates an axios instance with the base URL of the Whatsapp service and the authorization token
   * @returns An axios instance
   */
  static getAxiosInstance() {
    let instance;
    if (process.env.ENVIRONMENT !== 'production') {
      instance = axios.create({
        baseURL: process.env.WHATSAPP_SERVICE_API,
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${process.env.WHATSAPP_SERVICE_API_TOKEN}`
        }
      });

    } else {
      instance = {
        post: () => {
          // eslint-disable-next-line no-undef
          return new Promise(resolve => {
            resolve('fake success');
          });
        },
      };
      console.log('⚠️ In "development" mode the Audit service is disabled');
    }

    return instance;
  }


  static async sendMessage({ phone, message }) {
    return this.getAxiosInstance()
      .post('/messages/send-message', {
        phone: phone,
        message: message
      });
  }

  static async sendUniqueCode({ phone, code }) {
    return this.getAxiosInstance()
      .post('/messages/send-message-template', {
        phone: phone,
        template: {
          name: 'unique_code_request',
          components: [
            {
              type: 'body',
              parameters: [
                {
                  type: 'text',
                  text: `*${code}*`
                }
              ]
            }
          ]
        }
      });
  }

}

export default WhatsappService;