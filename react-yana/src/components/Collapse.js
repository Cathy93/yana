import React from 'react';
import Collapsible from 'react-collapsible';

class Collapse extends React.Component {
    render() {
        return(
          <div>
              <Collapsible className="accordion-container center-block"
                           trigger="What is this app?">
                   <p>This app is an online aboriginal languages learning
                   platform sponsoered for VACL. VACL staff and volunteers
                   experience helped build the content to make indegenous
                   language learning more fun and effective. It is also
                   100% free? Join the movement, sign up today!</p>
                   <p>For more details, visit the  VACL page.</p>
              </Collapsible>
              <Collapsible className="accordion-container center-block"
                           trigger="Where can I use this app?">
                   <p>You can use this app on your computer or smart phone
                   by accessing its website.</p>
              </Collapsible>
              <Collapsible className="accordion-container center-block"
                           trigger="How much does cost?">
                   <p>You can learn languages on this app completely free.
                   You can use it on your computer and sync it with our
                   free apps for your mobile device.</p>
                   <p>You can register at no cost. No catch.</p>
                   <p>Sign up today and get started!</p>
              </Collapsible>
              <Collapsible className="accordion-container center-block"
                           trigger="I think VACL is awesome and want to work
                                    there! How do I submit my resume?">
                   <p>If you are passionate about the VACL work and would
                   like to join our team, we would love to hear from you!</p>
                   <p>Check our VACL Employment opportunities, you will
                   find the current listings for the positions we have
                   available.</p>
                   <p>Sign up today and get started!</p>
              </Collapsible>
              <Collapsible className="accordion-container center-block"
                           trigger="Are there official studies about VACL?">
                   <p>Yes! We are always working on figuring out the best ways
                   to learn a new language through our aboringinal societies.
                   We have a team of staff and volunteers to help us source
                   our language education.</p>
              </Collapsible>
              <Collapsible className="accordion-container center-block"
                           trigger="Do I need the internet to use this app?">
                   <p>If you are accessing this app via the web, you need to be
                   connected to the internet.</p>
                   <p>Our lessons are available to you only at online mode.
                   You’ll need to connect to the Internet for those lessons to be
                   recorded and count towards your daily progress.
                   </p>
              </Collapsible>
              <Collapsible className="accordion-container center-block"
                           trigger="How does the apps algorithm work? How does
                                    it know when I have to strengthen my skills? Is it based on any
                                    science? Is it personalized?">
                  <p>The VACL have have seeked advice from the elders to
                  calculate your experience and when you should be exposed
                  to new skills and when it is time to look over old ones again
                  so that words stay fresh in your brain, and so your language
                  skills stay polished in order for you to advance with
                  confidence.</p>
              </Collapsible>
              <Collapsible className="accordion-container center-block"
                           trigger="Is my information safe?">
                   <p>We do not sell or share personal account information with
                   third parties. When you create a VACL account, you choose a
                   username and provide us with an email address, which is not
                   public.</p>
                   <p>The username/name you chose can be seen by other users of
                   VACL. Please note that your friends can find you via the
                   search function if they know which email address you used
                   for your account.</p>
                   <p>Be aware that if you are a student or teacher using VACL
                   for Schools, your email can be seen by your teacher (and
                   students can see the teacher's email).</p>
                   <p>Refer to our Privacy Policy for more information.</p>
                   <p>Note: if you are a parent or a teacher, you can learn
                   more about student privacy via VACL web site.</p>
              </Collapsible>
          </div>
        );
    }
}

export default Collapse;
