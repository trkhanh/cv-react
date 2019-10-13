import React from 'react';
function Contact(){
    return(
        <div class="section" id="contact">
            <div class="cc-contact-information">
            <div class="cc-contact">
                <div class="row">
                    <div class="col-md-9">
                        <div class="card mb-0" data-aos="zoom-in">
                            <div class="h4 text-center title">Contact Me</div>
                            <div class="row">
                                <form action="https://formspree.io/your@email.com" method="POST">
                                    <div class="p pb-3"><strong>Feel free to contact me </strong></div>
                                    <div class="row mb-3">
                                        <div class="col">
                                        <div class="input-group"><span class="input-group-addon"><i class="fa fa-user-circle"></i></span>
                                            <input class="form-control" type="text" name="name" placeholder="Name" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                        <div class="input-group"><span class="input-group-addon"><i class="fa fa-file-text"></i></span>
                                            <input class="form-control" type="text" name="Subject" placeholder="Subject" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                        <div class="input-group"><span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                            <input class="form-control" type="email" name="_replyto" placeholder="E-mail" required="required"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" placeholder="Your Message" required="required"></textarea>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                        <button class="btn btn-primary" type="submit">Send</button>
                                        </div>
                                    </div>
                                    </form> 
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
export default Contact;