import React from 'react'
import emailjs from 'emailjs-com';

function sendMail(props) {
    let data = {
      user_name : props.fullname,
      user_email : props.email,
      country: props.country,
      age: props.age,
      educationlevel: props.educationlevel,
      highereducation: props.highereducation,
      study: props.study,
      job: props.job,
      institute: props.job,
      program: props.program,
      goals : props.goals,
      englishScoreListening :props.englishScoreListening,
      englishScoreReading : props.englishScoreReading,
      englishScoreSpeaking : props.englishScoreSpeaking,
      englishScoreWriting : props.englishScoreWriting,
      tutionfeepaid: props.tutionfeepaid,
      tutionfee: props.tutionfee,
      GIC: props.GIC,
      tutionfeeGIC: props.tutionfeeGIC
    } 

    emailjs
    .send(
      'service_wrzp07k',
      'template_hdudygq',
      data,
      '01NBgstpkFSM5c5nf'
    )
    .then((response) => {
      console.log('Email sent:', response);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
    });
}

export default sendMail