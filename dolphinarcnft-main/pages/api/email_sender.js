// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export const emailSender = (data) => {
  return axios.post(
    `https://9p0u1s37wi.execute-api.eu-central-1.amazonaws.com/default/My-Email-Lambda`,
    data
  );
};
