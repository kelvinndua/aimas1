export default function validateInfo(values) {
  let errors = {};
  if (!values.firstname.trim()) {
    errors.firstname = "firstname required";
  }
  if (!values.lastname.trim()) {
    errors.lastname = "lastname required";
  }
  //Phone number
  if (values.phone.length === 0) {
    errors.phone = "phone number required";
  }
  if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = "check your phone number";
  }
  //Email
  if (!values.email) {
    errors.email = "Email required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
