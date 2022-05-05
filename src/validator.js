class Validator {
  email(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  password(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(String(password));
  }

  phone(phone) {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  }

  date(date) {
    const re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(String(date));
  }
}

module.exports = Validator;