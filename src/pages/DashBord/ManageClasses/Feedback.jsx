
const Feedback = () => {
    const handleSendFeedback=(event)=>{
        event.preventDefaut()
        const form = event.target.name.value
        console.log(form)
    }
   
  return (
    
    <div>
        <form onSubmit={handleSendFeedback} >


       
      
        <input type="text" name="name" placeholder="name" />
        <button type="submit">Send</button>
        </form>
    </div>
  );
};

export default Feedback;

