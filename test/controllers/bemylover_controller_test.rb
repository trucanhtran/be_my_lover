require "test_helper"

class BemyloverControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get bemylover_index_url
    assert_response :success
  end
end
