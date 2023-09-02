function response(id){
    if (/^\s*$/.test(inputText.value) && id=='user'){
        return
    }
    let scroll = document.getElementById('scroll')
    const bubbleContainer = document.createElement('div')
    const chat = document.getElementById('chat')
    chat.insertBefore(bubbleContainer, scroll)



    const bubble = document.createElement('div')
    bubble.classList.add('bubble')
    bubbleContainer.appendChild(bubble)

    const imgBot = document.createElement('div')
    imgBot.classList.add('img-bot')
    bubble.appendChild(imgBot)

    const img = document.createElement('img')
    img.src = 'img.png'
    img.classList.add('chat-bg')
    imgBot.appendChild(img)

        
    const bubbleImg = document.createElement('div')
    bubbleImg.classList.add('bubble-image')
    bubble.appendChild(bubbleImg)

    const chatBotIcon = document.createElement('img')
    bubbleImg.appendChild(chatBotIcon)

    const text = document.createElement('p')
    bubbleImg.appendChild(text)

    if (id == 'user'){
        
        
        chat.scrollTop = chat.scrollHeight
        chatBotIcon.src = 'chatbot.png'
        bubbleContainer.classList.add('bubble-container-right')
        text.innerText = inputText.value
        
        setTimeout(response, 1000, 'chat')
        
        inputText.disabled =true
    
    }
    else{

            // Create a JavaScript object with the data you want to send
            const dataToSend = {
                message: inputText
                // Add more key-value pairs as needed
            };

            // Make a POST request to your PHP script
            fetch('http://localhost/knights/send_data.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON
                },
                body: JSON.stringify(dataToSend), // Convert the data object to JSON
            })
                .then(response => response.json())
                .then(responseData => {
                    // Handle the response from the PHP script here
                    console.log(responseData);
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        
        inputText.value = ''
        chat.scrollTop = chat.scrollHeight
        chatBotIcon.src = 'robot.png'
        bubbleContainer.classList.add('bubble-container-left')
        let tempStr = '' 
        time = 1000
        for (let s of 'Your Bank Balance is MK200'){
            
            setTimeout(() => {
                
                tempStr += s
                text.innerText = tempStr
            }, time);
            time += 50

        }
        
        inputText.disabled =false
    }
    


}

    
const sendButton = document.getElementById('send-button')
sendButton.addEventListener("click", function(){
    response('user')
})

let inputText = document.getElementById('message-input')
inputText.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
        response('user')
    }
})

// Fetch data from the server-side script
fetch('http://localhost/knights/')
    .then(response => response.json())
    .then(data => {
        // Handle the data here
        for (let i of data){
            if (i['account_name']== 'John Doe' && i['Pin'] == 1111){
                const name = document.getElementById('name')
                name.innerText = i['account_name']

                const accNo = document.getElementById('acc_no')
                accNo.innerText = i['account_number']

                const branch = document.getElementById('branch')
                branch.innerText = i['branch_name']

                const accType = document.getElementById('acct')
                accType.innerText = i['account_type']

                
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
