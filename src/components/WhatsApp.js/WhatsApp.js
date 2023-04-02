import React, { useState, useEffect } from "react";
import "./WhatsApp.css";
import { BsWhatsapp, BsThreeDots } from "react-icons/bs";
import { GiTireIronCross } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";


function WhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [chatmsg, setChatmsg] = useState([{ type: "commsg", msg: 'How Can I help you?'}]);
  const [usermsg, setuserMsg] = useState("");

  const variants = {
    wopen: {
      width: "300px",
      height: "500px",
      backgroundColor: "white",
      borderRadius: "5px",
      transition: { duration: 0.5 },
    },
    wclose: {
      width: "50px",
      height: "50px",
      backgroundColor: "green",
      borderRadius: "50%",
      transition: { duration: 0.2 },
    },
    hideico: {
      position: "absolute",
      zIndex: 5,
      top: "20px",
      right: "20px",
      width: "fit-content",
      height: "fit-content",
    },
    showcontent: {
      opacity: 1,
      visibility: "visible",
    },
  };
  function handleAddmsgOnChange(e) {
    setuserMsg(e.target.value);
  }
  function handleAddChat(e) {
    e.preventDefault();
    if (usermsg !== "") {
      setChatmsg([...chatmsg, { type: "usermsg", msg: usermsg }]);
      setuserMsg("");
    }
  }

  return (
    <AnimatePresence>    
      <motion.div
        variants={variants}
        animate={isOpen ? "wopen" : "wclose"}
        initial="wclose"
        className="whatsapp"
      >
        <div className="whatsapp_wrap">
          <motion.div
            variants={variants}
            animate={isOpen ? "hideico" : ""}
            onClick={(e) => {
              setIsOpen(!isOpen);
            }}
            className="whatsapp_icon"
          >
            {!isOpen ? <BsWhatsapp /> : <GiTireIronCross />}
          </motion.div>
          <motion.div
            variants={variants}
            animate={isOpen ? "showcontent" : ""}
            className="whatsapp_wrap_box"
          >
            <div className="whatsapp_wrap_box_head">Need Help?</div>
            <div className="whatsapp_wrap_box_body">
              <div className="whatsapp_wrap_box_body_chat_wrap">
                {chatmsg.map((chat, idx) => {
                  return (
                    <div key={"chat" + idx} className="chatbox">
                      <div
                        className={`${
                          chat.type === "commsg" ? "commsg" : "usermsg"
                        }`}
                      >
                        {chat.type === "commsg" ? (
                          <>
                            <motion.div
                              whileInView={{ opacity: 0, visibility: "hidden" }}
                              initial={{ opacity: 1, visibility: "visible"}}
                              key={'ico'}
                              transition={{ delay: 3 }}
                            >
                              <BsThreeDots />
                            </motion.div>

                            <motion.div
                              whileInView={{ opacity: 1, visibility: "visible"}}
                              initial={{ opacity: 0, visibility: "hidden"}}
                              key={'chat'}
                              transition={{ delay: 3 }}
                            >
                              {chat.msg}
                            </motion.div>
                          </>
                        ) : (
                          chat.msg
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="whatsapp_wrap_box_foot">
              <form onSubmit={handleAddChat}>
                <input
                  type="text"
                  placeholder="Type your message"
                  value={usermsg}
                  onChange={handleAddmsgOnChange}
                />
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default WhatsApp;
