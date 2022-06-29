from datetime import date
import pandas as pd
import pyinputplus as pyip

datum = date.today()
heute = str(datum)

class currentmonth():

    def __init__(self, heute, datum):
        currentmonth = heute[:7]
        filename = ("Mone"+currentmonth)
        try:
            self.file = pd.read_csv(filename)

        except FileNotFoundError:
            currentbalance = pyip.inputFloat("Bitte geben sie den derzeitigen Kontostand an: ", min=0.1)
            self.file = pd.DataFrame(data={"datum":str(datum), "Kontostand": currentbalance, "Ausgaben": 0}, index=[0])

        current = self.file.iloc[-1:]
        letztesdatum = "".join(map(str,current["datum"].values[-1:]))
        letzterstand = "".join(map(str,current["Kontostand"].values[-1:]))
        print(f"Ihr letzter Finanzstand:\nAm {letztesdatum} hatten sie {letzterstand}€.")



object1 = currentmonth(heute, datum)