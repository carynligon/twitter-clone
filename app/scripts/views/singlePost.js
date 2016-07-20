import Backbone from 'backbone';
import tweets from '../collections/tweets';
import moment from 'moment';

const SinglePost = Backbone.View.extend({
    tagName: 'li',
    className: 'single-tweet',
    template: function() {
        return `
    <ul class="tweet-details">
      <li class="profile-pic"><i class="fa fa-user user-icon" aria-hidden="true"></i></li>
      <li class="username"><a href="#profile/${this.model.get('author')}">${this.model.get('fullname')}</a></li>
      <li class="handle"><a href="#profile/${this.model.get('author')}">@${this.model.get('author')}</a></li>
      <li class="time">${moment(new Date(this.model.get('timestamp'))).fromNow()}</li>
      <li class="body">${this.model.get('body')}</li>
    </ul>
    `;
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
});

export default SinglePost;