import { Resend } from 'resend';

const resend = new Resend('re_DiJTLyAp_BmRCtiUQfZA9Tmj12yHQJmrt');

export function resendTest(emailToSend:string){

    return resend.emails.send({
        from: 'rogetzgamer@gmail.com',
        to: emailToSend,
        subject: 'colour studios events letter',
        html: '<p>Congrats on subscribing to colour studios <strong>welcome on board</strong>!</p>'
      });
      
}


