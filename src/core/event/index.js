export function initEvent(vm) {
  $(document).on('click', '[d-code-toggle]', function () {
    $(this).parent().siblings('.d-demo__code').toggle()
  })
}
