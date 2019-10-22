const PodNotificationService = require('pod-notification-service');

// Variable Declaration & Initialization
let podNotification = new PodNotificationService({});

// *****************************************************************
// #1
// function: sendSMS
let sendSMSData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    // ------ REQUIRED ------
    content: 'SMS TEXT',
    mobileNumbers: ['MOBILE 1', 'MOBILE 2']

    // ------ OPTIONAL ------
    // scheduler: 'YYYY-MM-DD HH:MM' | new Date()
  }

  // ------ OPTIONAL ------
  // sreviceName: 'SERVICE NAME'
};

podNotification.sendSMS(sendSMSData)
  .then(function (result) {
    console.log('function: sendSMS ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error sendSMS ============>', error);
  });

// *****************************************************************
// #2
// function: getSMSStatus
let getSMSStatusData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    notificationMessageId: 'MESSAGE ID'
  }
};

podNotification.getSMSStatusData(getSMSStatusData)
  .then(function (result) {
    console.log('function: getSMSStatusData ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getSMSStatusData ============>', error);
  });

// *****************************************************************
// #3
// function: sendValidationSMS
let sendValidationSMSData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    // ------ REQUIRED ------
    receptor: 'MOBILE',
    token: 'TOKEN',
    template: 'TEMPLATE'

    // ------ OPTIONAL ------
    // token2: 'TOKEN 2',
    // token3: 'TOKEN 3',
    // type: 'TYPE'
  }
};

podNotification.sendValidationSMS(sendValidationSMSData)
  .then(function (result) {
    console.log('function: sendValidationSMS ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error sendValidationSMS ============>', error);
  });

// *****************************************************************
// #4
// function: getValidationSMSStatus
let getValidationSMSStatusData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    messageId: 0
  }
};

podNotification.getValidationSMSStatus(getValidationSMSStatusData)
  .then(function (result) {
    console.log('function: getValidationSMSStatus ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getValidationSMSStatus ============>', error);
  });

// *****************************************************************
// #5
// function: getSMSList
let getSMSListData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN'

  // ------ OPTIONAL ------
  // offset: 0,
  // size: 0,
  // orderBy: 'COLUMN,
  // order: 'acs | desc',
  // filter: 'FILTER',
  // filterValue: 'FILTER VALUE'
};

podNotification.getSMSList(getSMSListData)
  .then(function (result) {
    console.log('function: getSMSList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getSMSList ============>', error);
  });

// *****************************************************************
// #6
// function: sendEmail
let sendEmailData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    // ------ REQUIRED ------
    to: ['MAIL@MAIL.com']

    // ------ OPTIONAL ------
    // content: 'CONTENT',
    // subject: 'SUBJECT',
    // replyAddress: 'REPLAY ADDRESS',
    // cc: ['e.shekari@gmail.com']
    // bcc: ['e.shekari@gmail.com']
    // fileHashes: ['HASH1']
    // scheduler: 'DATE'
  }
};

podNotification.sendEmail(sendEmailData)
  .then(function (result) {
    console.log('function: sendEmail ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error sendEmail ============>', error);
  });

// *****************************************************************
// #7
// function: getEmailList
let getEmailListData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN'

  // ------ OPTIONAL ------
  // offset: 0,
  // size: 0,
  // orderBy: 'COLUMN,
  // order: 'acs | desc',
  // filter: 'FILTER',
  // filterValue: 'FILTER VALUE'
};

podNotification.getEmailList(getEmailListData)
  .then(function (result) {
    console.log('function: getEmailList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getEmailList ============>', error);
  });

// *****************************************************************
// #8
// function: pushNotificationByPeerId
let pushNotificationByPeerIdData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    // ------ REQUIRED ------
    receiver: ['mail@mail.com']

    // ------ OPTIONAL ------
    // text: 'TEXT',
    // subject: 'SUBJECT',
    // title: 'TITLE',
    // extra: 'EXTRA'
    // scheduler: 'DATE'
  }
};

podNotification.pushNotificationByPeerId(pushNotificationByPeerIdData)
  .then(function (result) {
    console.log('function: pushNotificationByPeerId ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error pushNotificationByPeerId ============>', error);
  });

// *****************************************************************
// #9
// function: pushNotificationByAppId
let pushNotificationByAppIdData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    // ------ REQUIRED ------
    appId: 'appId'

    // ------ OPTIONAL ------
    // text: 'TEXT',
    // title: 'TITLE',
    // extra: 'EXTRA'
    // scheduler: 'DATE'
  }
};

podNotification.pushNotificationByAppId(pushNotificationByAppIdData)
  .then(function (result) {
    console.log('function: pushNotificationByAppId ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error pushNotificationByAppId ============>', error);
  });

// *****************************************************************
// #10
// function: pushNotificationStatusAll
let pushNotificationStatusAllData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    messageId: 0
  }
};

podNotification.pushNotificationStatusAll(pushNotificationStatusAllData)
  .then(function (result) {
    console.log('function: pushNotificationStatusAll ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error pushNotificationStatusAll ============>', error);
  });

// *****************************************************************
// #11
// function: pushNotificationStatusReceived
let pushNotificationStatusReceivedData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    messageId: 0
  }
};

podNotification.pushNotificationStatusReceived(pushNotificationStatusReceivedData)
  .then(function (result) {
    console.log('function: pushNotificationStatusReceived ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error pushNotificationStatusReceived ============>', error);
  });

// *****************************************************************
// #12
// function: pushNotificationStatusSeen
let pushNotificationStatusSeenData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  content: {
    messageId: 0
  }
};

podNotification.pushNotificationStatusSeen(pushNotificationStatusSeenData)
  .then(function (result) {
    console.log('function: pushNotificationStatusSeen ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error pushNotificationStatusSeen ============>', error);
  });

// *****************************************************************
// #13
// function: getEmail
let getEmailData = {
  // ------ REQUIRED ------
  token: 'API TOKEN | ACCESS TOKEN',
  messageId: 0
};

podNotification.getEmail(getEmailData)
  .then(function (result) {
    console.log('function: getEmail ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getEmail ============>', error);
  });
