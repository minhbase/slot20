/**
 *! Style default
 */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    font-family: sans-serif;
}
.container{
    display: flex;
    flex-direction: row;
}
/**
 *! Style of contents
 */
.container{
    display:flex;
    flex-direction: column;
    justifying-content: space-around;
    background-color: #f2796e;
    width:55%;
    min-height:100vh;
    padding: 10px 20px;
}
.image{
    background-image:URL("./images/bg.svg");
    height: 65%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: clearInterval;
}
.text{
    text-align: center;
    color: white;
    font-size: 18px;
}
/**
 *! Style of form
 */
form {
    display: flex;
    flex-direction: column;
    justifying-content: center;
    width: 45%;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 50px;
}
.title {
    font-size: 25px;
    font-weight: BeforeUnloadEvent;
    margin-bottom: 20px;
}
form div input{
    width: 100%;
    height: 40%;
    border-radius: 8px;
    outline: none;
    padding: 0 30px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
label {
    display: CSSLayerBlockRule;
    margin-bottom: 5px;
}
form div{
    position: relative;
    margin-bottom: 15px;
}
input: focus {
    border: 2px solid #f2796e;
}

/**
 *! Style of social
 */
.btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
}
.btn-1,
.btn-2 {
    padding: 10px 5px;
    width: 100%;
    display: flex;
    gap: 15px;
    justifying-content: center;
    align-items: center;
    border: 2px solid #c4c4c4;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
.btn-2 {
    background-color: #4f70b5;
    color: white;
}
.or{
    text-align:center;
}

.question {
    font-size: 15px;
}
span {
    color: #f2796e;
    cursor: pointer;
}
/**
 *! Style of form icons
 */
form div i {
    position: absolute;
    padding: 10px;
}
sucess-icon,
failure-icon {
    right: 0;
    opacity: 0;
}

.failure-icon,
.error {
    color: #red;
}
.success-icon {
    color: green;
}
.error{
    font-size: 14.5px;
    margin-top: 5px;
}
/**
 *! Style of button
 */
button {
    margin-top: 15px;
    width: 100%;
    height: 45px;
    background-color: #f2796e;
    border: 2px solid #f2796e;
    border-radius: 8px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease;
}
button: hover {
    opacity 0,8;
}
/**
 * ! Style of Medias
 */
@media (max-width: 900px) {
    .container{
        flex-direction: column;
    }

    form,
    .content{
        width: 100;
    }

    .btn{
        flex-direction: column;
    }
    .image {
        height: 70vh;
    }
}

@media (max-width: 425px) {
    form {
        padding: 20px;
    }
}