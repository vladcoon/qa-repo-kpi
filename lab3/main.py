import time
from selenium import webdriver
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By

browser = webdriver.Chrome(executable_path="/home/anna/QA/KPI/lab3/chromedriver")
browser.maximize_window()
wait = WebDriverWait(browser, 10)

initial_url = "http://www.fb.com"
target_url = "http://www.facebook.com"


class NewUser:
    firstname = 'Anna'
    lastname = 'Tychenko'
    email = 'aniatychenko.fake1@mail.ru'
    password = 'Pa55word'
    birth_day = '11'
    birth_month = 'мая'
    birth_year = '2001'
    sex = "Женщина"


def find_button_by_text(text = ''):
    browser.find_element(By.XPATH, f"//*[text()='{text}']")


user = NewUser()

try:
    browser.get(initial_url)

    wait.until(lambda driver: driver.current_url != target_url)
    browser.find_element(By.XPATH, f"//*[text()='Создать новый аккаунт']").click()
    time.sleep(2)

    browser.find_element(By.NAME, "firstname").send_keys(user.firstname)
    browser.find_element(By.NAME, "lastname").send_keys(user.lastname)
    browser.find_element(By.NAME, "reg_email__").send_keys(user.email)
    
    time.sleep(2)
    browser.find_element(By.NAME, "reg_email_confirmation__").send_keys(user.email)
    browser.find_element(By.ID, "password_step_input").send_keys(user.password)

    Select(browser.find_element(By.NAME, "birthday_day")).select_by_visible_text(user.birth_day)
    Select(browser.find_element(By.NAME, "birthday_month")).select_by_visible_text(user.birth_month)
    Select(browser.find_element(By.NAME, "birthday_year")).select_by_visible_text(user.birth_year)
    browser.find_element(By.XPATH, "//input[@name='sex' and @value='1']").click()

    browser.find_element(By.XPATH, f"//button[text()='Регистрация']").click()
    time.sleep(30)
except Exception as ex:
    print(ex)
finally:
    browser.close()
    browser.quit()