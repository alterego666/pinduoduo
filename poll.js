document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("surveyCompleted")) {
      showSurvey();
    }
  });
  
  function showSurvey() {
    const surveyContainer = document.createElement("div");
    surveyContainer.id = "surveyBox";
    surveyContainer.innerHTML = `
      <div id="surveyContent">
        <h2>Опитування</h2>
        <form id="surveyForm">
          <div class="question">
            <p>1. Яке місто згадується як культурний центр України?</p>
            <label><input type="radio" name="q1" value="Київ"> Київ</label><br>
            <label><input type="radio" name="q1" value="Львів"> Львів</label><br>
            <label><input type="radio" name="q1" value="Одеса"> Одеса</label>
          </div>
          <div class="question">
            <p>2. Які страви відносяться до української кухні?</p>
            <label><input type="radio" name="q2" value="Борщ"> Борщ</label><br>
            <label><input type="radio" name="q2" value="Суші"> Суші</label><br>
            <label><input type="radio" name="q2" value="Піца"> Піца</label>
          </div>
          <div class="question">
            <p>3. Де знаходяться Карпати?</p>
            <label><input type="radio" name="q3" value="В Україні"> В Україні</label><br>
            <label><input type="radio" name="q3" value="У Франції"> У Франції</label><br>
            <label><input type="radio" name="q3" value="У Польщі"> У Польщі</label>
          </div>
          <div class="question">
            <p>4. Яке українське місто має порт?</p>
            <label><input type="radio" name="q4" value="Львів"> Львів</label><br>
            <label><input type="radio" name="q4" value="Одеса"> Одеса</label><br>
            <label><input type="radio" name="q4" value="Київ"> Київ</label>
          </div>
          <div class="question">
            <p>5. Які пам’ятки можна знайти в Україні?</p>
            <label><input type="radio" name="q5" value="Софійський собор"> Софійський собор</label><br>
            <label><input type="radio" name="q5" value="Ейфелева вежа"> Ейфелева вежа</label><br>
            <label><input type="radio" name="q5" value="Велика Китайська стіна"> Велика Китайська стіна</label>
          </div>
          <button type="button" onclick="submitSurvey()">Відправити</button>
        </form>
      </div>
      <style>
        #surveyBox {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: white;
          padding: 15px;
          border: 1px solid #ccc;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          max-width: 300px;
          border-radius: 8px;
        }
        button {
          width: 100%;
          padding: 10px;
          background: #004b87;
          color: white;
          border: none;
          cursor: pointer;
        }
      </style>
    `;
    document.body.appendChild(surveyContainer);
  }
  
  function submitSurvey() {
    let allAnswered = true;
    const answers = {};
    for (let i = 1; i <= 5; i++) {
      const selectedOption = document.querySelector(`input[name='q${i}']:checked`);
      if (selectedOption) {
        answers[`q${i}`] = selectedOption.value;
      } else {
        allAnswered = false;
      }
    }
    if (allAnswered) {
      localStorage.setItem("surveyAnswers", JSON.stringify(answers));
      localStorage.setItem("surveyCompleted", "true");
      alert("Дякуємо за вашу відповідь!");
      document.getElementById("surveyBox").remove();
    } else {
      alert("Будь ласка, відповідайте на всі питання.");
    }
  }
  