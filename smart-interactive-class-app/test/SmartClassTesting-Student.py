#Font End Testing
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
"""Test Case 1: Student Login Successfully"""
def test_login_normally_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-email")
    input_text.send_keys("olivia@student.com")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-password")
    input_text.send_keys("oooooo")
    time.sleep(1)
    # click_btn=driver.find_element_by_id("student-login-button")
    # click_btn.send_keys("student-login-button")

    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-login-button'))
        )
        element.click()

        time.sleep(5)
        # print("Normal student Login Sucessfully!")

        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'logout'))
        )
        element.click()
        time.sleep(2)
        driver.quit()
    except:
        driver.quit()


"""Test Case 2: Student Login with invalid email"""

def test_login_invalid_email_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-email")
    input_text.send_keys("olivia123com")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-password")
    input_text.send_keys("12345")
    time.sleep(1)

    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-login-button'))
        )
        element.click()

        time.sleep(5)

        driver.quit()
    except:
        driver.quit()



"""Test Case 3: Student Login with invalid password"""

def test_login_invalid_password_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-email")
    input_text.send_keys("olivia@student.com")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-password")
    input_text.send_keys("12345")
    time.sleep(1)

    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-login-button'))
        )
        element.click()

        time.sleep(5)

        driver.quit()
    except:
        driver.quit()

"""Test Case 4: Student Login with no input"""
def test_login_invalid_input_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)

    element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-login-button'))
        )
    element.click()
    
    time.sleep(3)
    driver.quit()


"""Test Case 5: Student SignUp Normal"""
def test_signup_normally_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")

    time.sleep(1)
    click_btn=driver.find_element_by_id("student-signup-button")
    click_btn.send_keys("student-signup-button")

    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-signup-button'))
        )
        element.click()
        time.sleep(1)
        input_text = driver.find_element_by_id("Name")
        input_text.send_keys("Sarah Eng")
        time.sleep(1)
        input_text = driver.find_element_by_id("email")
        input_text.send_keys("sarah@sutd.edu.sg")
        time.sleep(1)
        input_text = driver.find_element_by_id("password")
        input_text.send_keys("sarah123")
        time.sleep(1)
        input_text = driver.find_element_by_id("studentID")
        input_text.send_keys("1001234")
        time.sleep(1)
        click_btn=driver.find_element_by_id('signup')
        click_btn.send_keys('signup')
        time.sleep(5)
        driver.quit()

    except:
        driver.quit()


"""Test Case 6: Student SignUp with invalid email"""
def test_signup_invalid_email_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")

    time.sleep(1)
    click_btn=driver.find_element_by_id("student-signup-button")
    click_btn.send_keys("student-signup-button")

    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-signup-button'))
        )
        element.click()
        time.sleep(1)
        input_text = driver.find_element_by_id("Name")
        input_text.send_keys("Sarah Eng")
        time.sleep(1)
        input_text = driver.find_element_by_id("email")
        input_text.send_keys("sarah12345")
        time.sleep(1)
        input_text = driver.find_element_by_id("password")
        input_text.send_keys("sarah123")
        time.sleep(1)
        input_text = driver.find_element_by_id("studentID")
        input_text.send_keys("1001234")
        time.sleep(1)
        click_btn=driver.find_element_by_id('signup')
        click_btn.send_keys('signup')
        time.sleep(5)
        driver.quit()

    except:
        driver.quit()



"""Test Case 7: Student SignUp with invalid inputs"""
def test_signup_invalid_inputs_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")

    time.sleep(1)
    click_btn=driver.find_element_by_id("student-signup-button")
    click_btn.send_keys("student-signup-button")

    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-signup-button'))
        )
        element.click()
        time.sleep(1)
        input_text = driver.find_element_by_id("Name")
        input_text.send_keys(" ")
        time.sleep(1)
        input_text = driver.find_element_by_id("email")
        input_text.send_keys("sarah12345")
        time.sleep(1)
        click_btn=driver.find_element_by_id('signup')
        click_btn.send_keys('signup')
        time.sleep(5)
        driver.quit()

    except:
        driver.quit()



# whitebox

"""Test Case 8: Student Join New Class"""
def add_new_class_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-email")
    input_text.send_keys("olivia@student.com")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-password")
    input_text.send_keys("oooooo")
    time.sleep(1)

    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-login-button'))
        )
        element.click()

        time.sleep(2)
        # print("Normal student Login Sucessfully!")

        addClass = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'addclass'))
        )
        addClass.click()
        time.sleep(2)
        
        input_text = driver.find_element_by_id("class-title")
        input_text.send_keys("Dummy Class 102")
        time.sleep(1)

        addClass = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'join'))
        )
        addClass.click()
        
        addClass = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'cancel'))
        )
        addClass.click()
        time.sleep(2)
        driver.quit()

    except:
        driver.quit()

"""Test Case 9: Student Select Class"""
def check_class_student():
    driver = webdriver.Chrome(executable_path="/Users/olivia/Desktop/chromedriver")

    # login
    driver.get("http://localhost:3000/")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-email")
    input_text.send_keys("olivia@student.com")
    time.sleep(1)
    input_text = driver.find_element_by_id("student-password")
    input_text.send_keys("oooooo")
    time.sleep(1)
    click_btn=driver.find_element_by_id("student-login-button")
    click_btn.send_keys("student-login-button")

    try:
        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'student-login-button'))
        )
        element.click()
        time.sleep(4)
        
        input_text = driver.find_element_by_id("student-ask-question")
        time.sleep(0.8)
        input_text.send_keys("Whitebox testing?")

        time.sleep(1.5)
        submitQn = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'submitqn'))
        )
        submitQn.click()
        
        postlect = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'topostlect'))
        )
        postlect.click()
        time.sleep(4)

        element = WebDriverWait(driver,5).until(
            EC.presence_of_element_located((By.ID, 'endbutton'))
        )
        element.click()
        time.sleep(4)

        driver.quit()

    except:
        driver.quit()


'''TESTCASES'''
test_login_normally_student()

test_login_invalid_email_student()

test_login_invalid_password_student()

test_login_invalid_input_student()


test_signup_normally_student()

test_signup_invalid_email_student()

test_signup_invalid_inputs_student()



add_new_class_student()

check_class_student()




