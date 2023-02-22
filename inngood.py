from PyQt5.QtGui import QTextDocument, QTextCursor
from PyQt5.QtPrintSupport import QPrinter
from PyQt5.QtWidgets import QApplication
from datetime import datetime


class Invoice:
    def __init__(self, company_name, company_contact, company_address, company_policy, items, subtotal, discount):
        self.company_name = company_name
        self.company_contact = company_contact
        self.company_address = company_address
        self.company_policy = company_policy
        self.items = items
        self.subtotal = subtotal
        self.discount = discount
        self.total = subtotal - discount

    def generate_invoice(self):
        # Create the document and set font
        doc = QTextDocument()
        cursor = QTextCursor(doc)
        header = """ 
        <style> 

#top, #mid,#bot{ /* Targets all id with 'col-' */
  border-bottom: 1px solid #EEE;
}

#top{min-height: 100px;}
#mid{min-height: 80px;} 
#bot{ min-height: 50px;}

#top .logo{
  //float: left;
	height: 60px;
	width: 60px;
	background: url(http://michaeltruong.ca/images/logo1.png) no-repeat;
	background-size: 60px 60px;
}

.info{
  display: block;
  //float:left;
  margin-left: 0;
  color:red
}
        </style>
                        <center id="top">
                <div class="logo"></div>
                <div class="info"> 
                    <h2>SBISTechs Inc</h2>
                </div> 
                </center> 
        """
        cursor.insertHtml(header)
        cursor.insertHtml("<h1 style=''>INVOICE</h1><br>")

        # Add the company header
        cursor.insertHtml(f"<p><strong>{self.company_name}</strong></p>")
        cursor.insertHtml(f"<p>{self.company_contact}</p>")
        cursor.insertHtml(f"<p>{self.company_address}</p>")

        # Add the date
        cursor.insertHtml(f"<p>Date: {datetime.now().strftime('%d/%m/%Y')}</p>")

        # Create the table
        table = "<table>"
        for i, item in enumerate(self.items, 1):
            table += f"<tr><td>{i}</td><td>{item['name']}</td><td>{str(item['price'])}</td><td>{str(item['quantity'])}</td><td>{str(item['price']*item['quantity'])}</td></tr>"
        table += f"<tr><td colspan='4'><strong>Subtotal:</strong></td><td><strong>{str(self.subtotal)}</strong></td></tr>"
        table += f"<tr><td colspan='4'><strong>Discount:</strong></td><td><strong>{str(self.discount)}</strong></td></tr>"
        table += f"<tr><td colspan='4'><strong>Total:</strong></td><td><strong>{str(self.total)}</strong></td></tr>"
        table += "</table>"
        cursor.insertHtml(table)

        # Add the company policy
        cursor.insertHtml(f"<p>{self.company_policy}</p>")

        # Print the invoice
        printer = QPrinter()
        printer.setOutputFormat(QPrinter.PdfFormat)
        printer.setOutputFileName("invoice.pdf")
        doc.print_(printer)

if __name__ == '__main__':
    app = QApplication([])
    company_name = "My Company"
    company_contact = "123 Main Street\nCity, State 12345\nPhone: 555-555-5555\nEmail: info@mycompany.com"
    company_address = "123 Main Street\nCity, State 12345"
    company_policy = "Thank you for your business! We appreciate your support and hope to see you again soon."
    items = [
        {'name': 'Item 1', 'price': 10, 'quantity': 2},
        {'name': 'Item 2', 'price': 20, 'quantity': 1},
        {'name': 'Item 3', 'price': 5, 'quantity': 3}
    ]
    subtotal = sum(item['price'] * item['quantity'] for item in items)
    discount = 5
    invoice = Invoice(company_name, company_contact, company_address, company_policy, items, subtotal, discount)
    invoice.generate_invoice()
    app.exec_()
