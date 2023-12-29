// prevent form submit
const form = document.querySelector("#contact-form");
const formData = {
	userName: null,
	userPhone: null,
	userEmail: null,
	userTimeZone: null,
	petName: null,
	petType: null,
	petAge: null,
};
function grabInput(inputID) {
	let input = form.querySelector(`${inputID}`);
	return input;
}
const submit = document.querySelector("#form-submit");
submit.addEventListener("click", (e) => {
	e.preventDefault();
	let newForm = { ...formData };
	newForm.userName = grabInput("#user-name").value;
	newForm.userPhone = grabInput("#user-phone").value;
	newForm.userEmail = grabInput("#user-email").value;
	newForm.userTimeZone = grabInput("#user-timezone").value;
	newForm.petName = grabInput("#pet-name").value;
	newForm.petType = grabInput("#pet-type").value;
	newForm.petAge = grabInput("#pet-age").value;

	alert(`
  User Information: \n
  \t Name: ${newForm.userName} \n
  \t Phone: ${newForm.userPhone} \n
  \t Email: ${newForm.userEmail} \n
  \t Time Zone: ${newForm.userTimeZone} \n\n
  Pet Information: \n
  \t Name: ${newForm.petName} \n
  \t Type: ${newForm.petType} \n
  \t Age: ${newForm.petAge}
  `);
});
