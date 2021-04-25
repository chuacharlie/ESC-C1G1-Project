# Font End Testing
import time
from selenium import webdriver
from function import *
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
import os


# blackbox

"""Test Case 1: Intructor Login Successfully"""


def test_login_normally_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-email")
    input_text.send_keys("ang@sutd.com")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-password")
    input_text.send_keys("ang123")
    time.sleep(1)

    try:
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-login-button'))
        )
        element.click()

        time.sleep(3)
        # print("Normal Intructor Login Sucessfully!")

        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'logout'))
        )
        element.click()
        time.sleep(3)
        driver.quit()
    except:
        driver.quit()


"""Test Case 2: Intructor Login with invalid password"""


def test_login_invalid_email_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-email")
    input_text.send_keys("ang1234com")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-password")
    input_text.send_keys("12345")
    time.sleep(1)

    try:
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-login-button'))
        )
        element.click()

        time.sleep(3)
        driver.quit()
    except:
        driver.quit()


"""Test Case 3: Intructor Login with invalid password"""


def test_login_invalid_password_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-email")
    input_text.send_keys("ang@sutd.com")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-password")
    input_text.send_keys("12345")
    time.sleep(1)

    try:
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-login-button'))
        )
        element.click()

        time.sleep(3)
        driver.quit()
    except:
        driver.quit()


"""Test Case 4: Intructor Login with no input"""


def test_login_invalid_input_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)

    element = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.ID, 'instructor-login-button'))
    )
    element.click()
    # print("cl")
    time.sleep(3)
    driver.quit()


"""Test Case 5: Intructor SignUp Successfully"""


def test_signup_normally_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")

    time.sleep(1)
    click_btn = driver.find_element_by_id("instructor-signup-button")
    click_btn.send_keys("instructor-signup-button")

    try:
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-signup-button'))
        )
        element.click()
        time.sleep(1)
        input_text = driver.find_element_by_id("Name")
        input_text.send_keys("Mr Ang")
        time.sleep(1)
        input_text = driver.find_element_by_id("email")
        input_text.send_keys("ang@sutd.edu.sg")
        time.sleep(1)
        input_text = driver.find_element_by_id("password")
        input_text.send_keys("ang123")
        time.sleep(1)
        click_btn = driver.find_element_by_id('signup')
        click_btn.send_keys('signup')
        time.sleep(5)
        driver.quit()

    except:
        driver.quit()


"""Test Case 6: Intructor SignUp with invalid email"""


def test_signup_invalid_email_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")

    time.sleep(1)
    click_btn = driver.find_element_by_id("instructor-signup-button")
    click_btn.send_keys("instructor-signup-button")

    try:
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-signup-button'))
        )
        element.click()
        time.sleep(1)
        input_text = driver.find_element_by_id("Name")
        input_text.send_keys("Mr Ang")
        time.sleep(1)
        input_text = driver.find_element_by_id("email")
        input_text.send_keys("ang12345")
        time.sleep(1)
        input_text = driver.find_element_by_id("password")
        input_text.send_keys("ang123")
        click_btn = driver.find_element_by_id('signup')
        click_btn.send_keys('signup')
        time.sleep(5)
        driver.quit()

    except:
        driver.quit()


"""Test Case 7: Intructor SignUp with invalid inputs"""


def test_signup_invalid_inputs_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")

    time.sleep(1)
    click_btn = driver.find_element_by_id("instructor-signup-button")
    click_btn.send_keys("instructor-signup-button")

    try:
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-signup-button'))
        )
        element.click()
        time.sleep(1)
        input_text = driver.find_element_by_id("Name")
        input_text.send_keys("Mr Ang")
        time.sleep(1)
        input_text = driver.find_element_by_id("email")
        input_text.send_keys("   ")
        time.sleep(1)
        click_btn = driver.find_element_by_id('signup')
        click_btn.send_keys('signup')
        time.sleep(5)
        driver.quit()

    except:
        driver.quit()

# Whitebox


"""Test Case 8: Intructor Add New Class"""


def add_new_class_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-email")
    input_text.send_keys("ang@sutd.edu.sg")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-password")
    input_text.send_keys("ang123")
    time.sleep(1)

    try:
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-login-button'))
        )
        element.click()

        time.sleep(2)

        addClass = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'addclass'))
        )
        addClass.click()
        time.sleep(2)

        input_text = driver.find_element_by_id("class-title")
        input_text.send_keys("Dummy Class 102")
        time.sleep(1)

        addClass = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'add'))
        )
        addClass.click()

        addClass = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'cancel'))
        )
        addClass.click()

        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-login-button'))
        )
        element.click()
        time.sleep(4)
        driver.quit()

    except:
        driver.quit()


"""Test Case 9: Intructor Select Class"""


def check_class_prof():
    driver = webdriver.Chrome(
        executable_path="/Users/olivia/Desktop/chromedriver")

    # login
    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-email")
    input_text.send_keys("ang@sutd.edu.sg")
    time.sleep(1)
    input_text = driver.find_element_by_id("instructor-password")
    input_text.send_keys("ang123")
    time.sleep(1)

    try:
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'instructor-login-button'))
        )
        element.click()

        time.sleep(2)
        checkFeedback = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'feedback'))
        )
        checkFeedback.click()
        time.sleep(2)
        checkQuiz = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'quizzes'))
        )
        checkQuiz.click()
        time.sleep(2)

        checkStudents = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.ID, 'students'))
        )
        checkStudents.click()
        time.sleep(4)
        driver.quit()

    except:
        driver.quit()


'''TESTCASES'''

test_login_normally_prof()

test_login_invalid_email_prof()

test_login_invalid_password_prof()

test_login_invalid_input_prof()


test_signup_normally_prof()

test_signup_invalid_email_prof()

test_signup_invalid_inputs_prof()


add_new_class_prof()

check_class_prof()
