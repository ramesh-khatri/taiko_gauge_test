const { textBox, into, write, click, text } = require('taiko');
const assert = require("assert");
'use strict';

step("Enter valid Username: <user_name> and Password: <user_password>", async (user_name, user_password) => {
    await write(user_name, into(textBox({id:"txtUsername"})));
    await write(user_password, into(textBox({id:"txtPassword"})));
});

step("Click <login> button", async (login) => {
    await click(login, { navigationTimeout: 60000 });
});

step("Enter invalid Username: <user_name> and Password: <user_password>", async (user_name, user_password) => {
    await write(user_name, into(textBox({id:"txtUsername"})));
    await write(user_password, into(textBox({id:"txtPassword"})));
});

step("Verify <page_text> message exists", async (page_text) => {
    assert.ok(await text(page_text, {selectHiddenElements: true}).exists())
})

step("Must Display Error Message <error_message>", async (error_message) => {
    assert.ok(await text(error_message).exists())
})
